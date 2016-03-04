import TweetBox from './components/TweetBox';
import TweetsList from './components/TweetsList';

let mockTweets = [
  {id: 1, name: 'Albert Pak', body: 'My first #tweet'},
  {id: 2, name: 'Albert Pak', body: 'My second #tweet'},
  {id: 3, name: 'Albert Pak', body: 'My third #tweet'},
];

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <TweetBox />
        <TweetsList tweets={mockTweets} />
      </div>
    );
  }
}

let documentReady = () => {
  ReactDOM.render(
    <Main />, document.getElementById('react')
  );
};

$(documentReady);
