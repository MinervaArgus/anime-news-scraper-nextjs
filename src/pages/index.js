import fetch from 'node-fetch';

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/animeNews');
  const data = await res.json();

  console.log(data);  // Log the data here.

  return {
    props: { 
      malNews: data.malNews || [], 
      annNews: data.annNews || [],
      redditComments: data.redditComments || [],
      animenewsSubredditPosts: data.animenewsSubredditPosts || [],
      rssPosts: data.rssPosts || [],
    },
  };
}
  export default function Home({ malNews, annNews, redditComments, animenewsSubredditPosts, rssPosts }) {

    return (
        <div>
            <h1>MAL Anime News</h1>
            {malNews.map((newsItem, index) => (
                <div key={index}>
                    <h2>{newsItem.title}</h2>
                    <p>{newsItem.content}</p>
                </div>
            ))}

            <h1>Anime News Network News</h1>
            {annNews.map((newsItem, index) => (
                <div key={index}>
                    <h2>{newsItem.title}</h2>
                    <p>{newsItem.content}</p>
                </div>
            ))}

            <h1>Anime Megathread Comments</h1>
            {redditComments.map((newsItem, index) => (
                <div key={index}>
                    <h2>{newsItem.title}</h2>
                    <p>{newsItem.content}</p>
                </div>
            ))}

            <h1>Anime News Subreddit News</h1>
            {animenewsSubredditPosts.map((newsItem, index) => (
                <div key={index}>
                    <h2>{newsItem.title}</h2>
                    <p>{newsItem.content}</p>
                </div>
            ))}

            <h1>Crunchyroll News</h1>
            {rssPosts.map((newsItem, index) => (
                <div key={index}>
                    <h2>{newsItem.title}</h2>
                    <p>{newsItem.content}</p>
                </div>
            ))}
        </div>
    )
}
