import { useState } from "react";
import { SearchIcon } from "../assets";

const ChannelSearch = () => {
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const getChannels = async (text: string) => {
    try {
      // TODO: fetch channels
    } catch (error) {
      setQuery("");
    }
  };

  const onSearch = (event: any) => {
    event.preventDefault();

    setLoading(true);
    setQuery(event.target.value);
    getChannels(event.target.value);
  };

  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper"></div>
      <div className="channel-search__input__icon">
        <SearchIcon />
      </div>
      <input
        type="text"
        className="channel-input__text"
        placeholder="Search"
        value={query}
        onChange={onSearch}
      />
    </div>
  );
};

export default ChannelSearch;
