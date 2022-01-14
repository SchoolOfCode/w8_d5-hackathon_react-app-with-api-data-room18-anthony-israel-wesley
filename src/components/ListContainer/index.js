import NewsDisplayCard from "../NewsDisplayCard";

export function ListContainer({ news }) {
  console.log(news);
  if (news) {
    return (
      <li>
        {news.map((item) => {
          return (
            <NewsDisplayCard
              title={item.title}
              image={item.urlToImage}
              source={item.source.name}
              descrip={item.content}
            />
          );
        })}
      </li>
    );
  } else {
    return null;
  }
}
