import './App.css'
import {Component} from 'react'
import BrowseItem from './components/BrowseItem'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {searchInput: '', browsersList: initialHistoryList}

  onChangeInputChar = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteHistory = id => {
    const {browsersList} = this.state
    const updateList = browsersList.filter(eachBrowser => eachBrowser.id !== id)
    this.setState({browsersList: updateList})
  }

  render() {
    const {searchInput, browsersList} = this.state
    const searchResults = browsersList.filter(eachBrowser =>
      eachBrowser.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    let emptyHistory = ''
    if (browsersList.length !== 0 && searchResults.length !== 0) {
      emptyHistory = searchResults.map(eachBrowser => (
        <BrowseItem
          browserDetails={eachBrowser}
          key={eachBrowser.id}
          deleteItem={this.onDeleteHistory}
        />
      ))
    } else {
      emptyHistory = (
        <p className="empty-history">There is no history to show</p>
      )
    }
    const jsxElement = (
      <div className="browser-bg-container">
        <div className="sub-bg-container">
          <h1 className="heading">Browser History</h1>
          <div className="history-bg-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
              alt="app logo"
              className="history-image"
            />
            <div className="search-container">
              <div className="search-icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                  alt="search"
                  className="search-icon"
                />
              </div>
              <input
                type="search"
                placeholder="Search history"
                className="search-text"
                onChange={this.onChangeInputChar}
                value={searchInput}
              />
            </div>
          </div>
          <ul className="ul-container">
            {emptyHistory}
          </ul>
        </div>
      </div>
    )
    return jsxElement
  }
}
export default App
