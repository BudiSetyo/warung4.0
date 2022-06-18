import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Search = ({ onChange, onKeyDown }) => {
  return (
    <>
      <InputGroup className="bg-gray-100 rounded-md">
        <InputLeftElement children={<SearchIcon color="#0000007A" />} />
        <Input
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder="Search"
          border="none"
          focusBorderColor="none"
        />
      </InputGroup>
    </>
  );
};

export default Search;
