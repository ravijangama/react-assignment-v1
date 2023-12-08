import './index.css'

const BrowseItem = props => {
  const {browserDetails, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = browserDetails

  const clickOnDeleteIcon = () => {
    deleteItem(id)
  }

  const jsxElement = (
    <li className="li-container">
      <p className="time-access">{timeAccessed}</p>
      <div className="del-logo-container">
        <div className="logo-container">
          <img src={logoUrl} alt="domain logo" className="logo-image" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
          alt="delete"
          onClick={clickOnDeleteIcon}
        />
      </div>
    </li>
  )
  return jsxElement
}
export default BrowseItem
