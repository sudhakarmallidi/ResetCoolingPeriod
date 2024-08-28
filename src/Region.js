import Form from 'react-bootstrap/Form';

function SelectBasicExample() {
  return (
    <Form.Select aria-label="Default select example">
      <option> Please select the Region</option>
      <option value="1">K Region</option>
      <option value="2">G Region</option>
    </Form.Select>
  );
}

export default SelectBasicExample;