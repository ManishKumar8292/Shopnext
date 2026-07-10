const CustomerRating = ({ item }) => {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">
      <p className="mx-auto mt-6 max-w-3xl text-md text-indigo-900">
        {item.review}
      </p>
      {[1, 2, 3, 4, 5].map((star, idx) => {
        return (
          <span key={idx} className="text-yellow-500">
            {star <= item.rating ? "★" : "☆"}
          </span>
        );
      })}
      <span>{item.rating}</span>
      <h3 className="mt-6 text-xl font-bold">{item.name}</h3>
    </div>
  );
};

export default CustomerRating;
