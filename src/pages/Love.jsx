import ApiBookCard from '../components/ApiBookCard.jsx'
const Love = ({ loveBooks }) => {
  return (
    <>
        <div>
            <h1>Love</h1>
            <div className="collection-list" >
            { loveBooks.map(work => <ApiBookCard book={work} key={work.ia}/>)} 
            </div>
        </div>
    </>
  );
};
export default Love;

