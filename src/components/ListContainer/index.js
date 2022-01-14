import NewsDisplayCard from "../NewsDisplayCard";

export function ListContainer({ news, title, image, descrip, source }) {
  if (news) {
    return (
      <ul>
        {news.map((item) => {
          return <NewsDisplayCard title={item.title} />;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
