const ListItem = ({ Title }) => {
  return (
    <li className="flex items-center gap-3 text-md text-gray-600">
      {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        className="bg-sky-500 fill-white rounded-full p-[3px]"
        viewBox="0 0 24 24"
      >
        <path
          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
          data-original="#000000"
        />
      </svg>
      {Title}{" "}
    </li>
  );
};

export default ListItem;
