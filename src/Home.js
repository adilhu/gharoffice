import { Link, useNavigate } from 'react-router-dom';
import './App.css';

const imgStyle = {
  height: "300px",
  width: "250px",
   margin: "10px 10px",
   borderRadius: "5px",
   display: "inline-block",
   overflow: "hidden",
}

function Home() {
   const navigate = useNavigate();
   const onClick = () => {
      navigate('/bookseat')
   }
   const movies = [
      { title: "Ironman", cover_picture: "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_FMjpg_UX1000_.jpg" },
      { title: "Doctor Strange", cover_picture: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/4c177c2b7f7bb9a679f089bcb50f844e_3e89eb5d-ffbd-4033-a00f-e595a3ef2e2a_240x360_crop_center.progressive.jpg?v=1573587540" },
      {title: "Spider Man", cover_picture: "https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg"},
      {title: "Spider Man", cover_picture: "https://www.adobe.com/express/create/poster/media_14f888136eecf9b6e4d83386789e660f15349f96c.jpeg?width=400&format=jpeg&optimize=medium"},
      {title: "Spider Man", cover_picture: "https://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg"},
      {title: "Spider Man", cover_picture: "https://d2j1wkp1bavyfs.cloudfront.net/wp-content/uploads/2018/07/01061017/7315990.jpg?d=360x540&q=50"},
      {title: "Spider Man", cover_picture: "https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/the-lie-2020/large_lie-poster.jpg"},
      {title: "Spider Man", cover_picture: "https://qph.cf2.quoracdn.net/main-qimg-b447e1b52fbd13f55ed93c2a4cab9cff.webp"},
      {title: "Spider Man", cover_picture: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/p16961090-v-v8-ab-1571066584.jpg?crop=1xw:1xh;center,top&resize=480:*"},
    ]
   return (
      <>
         {movies.map(movie => <Link to="bookseat" onClick={onClick} style={imgStyle}>
            <img height="100%" width="100%" onClick={onClick} src={movie.cover_picture} alt="cover_picture" />
         </Link>)}
      </>
  );
}

export default Home;
