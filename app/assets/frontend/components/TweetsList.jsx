import Tweet from './Tweet';

export default class TweetsList extends React.Component {
  render() {
    return (
      <div className="row">
        <ul className="collection">
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </ul>
      </div>
    );
  }
}
