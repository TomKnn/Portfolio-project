const PortfolioItemPage = ({ item }) => {
  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <img src={item.imageUrl} alt={item.title} />
    </div>
  );
};

export default PortfolioItemPage;
