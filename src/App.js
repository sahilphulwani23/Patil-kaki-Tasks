import React,{useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  buttonStyle:{
    border: '1px solid #ccc',
    padding: '10px 15px',
    margin: '10px 520px'
  },
  Count:{
    margin: '10px 545px'
  }
});


const TableUI = () => {
  const classes = useStyles();

  const [users, setUsers] = React.useState([]);
  // Fetch data from the public API
  const  fetchAPI = useCallback( async ()=>{
    try{
      const response = await fetch('https://gorest.co.in/public/v2/users');
      if(!response.ok){
        throw new Error('Something went wrong!');
      }

      const dataArr = [];
      const data = await response.json();

      for (const key in data){
        dataArr.push({
          id:data[key].id,
          name: data[key].name,
          email: data[key].email,
          gender : data[key].gender
        })
      }
      setUsers(dataArr);
    } catch(error) {}
  },[]);
  
  // Calculate the count of male and female users
  const maleUsers = users.filter(user => user.gender === 'male').length;
  const femaleUsers = users.filter(user => user.gender === 'female').length;

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Gender</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row">
                  {user.id}
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.gender}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <button onClick={fetchAPI} className={classes.buttonStyle}>Click to Fetch-Data</button>

      {/* Show the count of male and female users  */}
      <div className={classes.Count}>
        <p>Male users: {maleUsers}</p>
        <p>Female users: {femaleUsers}</p>
      </div>
    </>
  );   
};

export default TableUI;
