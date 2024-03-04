import ApiBookCard from '../components/ApiBookCard.jsx'
const Horror = ({ horrorBooks }) => {
  return (
    <>
        <div>
            <h1>Horror</h1>
            <div className="collection-list" >
            { horrorBooks.map(work => <ApiBookCard book={work} key={work.ia}/>)} 
            </div>
        </div> 
    </>
  );
};
export default Horror;

