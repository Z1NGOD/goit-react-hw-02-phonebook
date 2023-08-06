import styled from "@emotion/styled";
const ContactsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 24px;
`;
const ContactItem = styled.li`
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 5px;
  border-radius: 5px;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  gap:14px;
`;

export { ContactsList, ContactItem}