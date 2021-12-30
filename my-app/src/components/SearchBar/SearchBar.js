import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";

const { Search } = Input;
const onSearch = (value) => console.log(value);
export default function SearchBar(props) {
  return (
    <>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        style={{borderRadius:"1px"}}
      />
    </>
  );
}
