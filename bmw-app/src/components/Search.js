import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavBar from './NavBar';

function Search({setSearchText}){
    return (
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              id="search"
              onChange={(event) => {
                  setSearchText(event.target.value)
              }}
              
            />
            <Button>Search</Button>
          </Form>
    )
}

export default Search;