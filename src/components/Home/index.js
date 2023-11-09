import {Component} from 'react'
import TeamCard from '../TeamCard'
import Loader from 'react-loader-spinner'

class Home extends Component {
  state = {cardData: [], isLoading: true}

  componentDidMount() {
    this.gettingUrls()
  }

  gettingUrls = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const formattedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({cardData: formattedData, isLoading: false})
  }

  gotRender = () => {
    const {cardData} = this.state
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          alt="ipl logo"
        />
        <h1>IPL Dashboard</h1>
        <ul>
          {cardData.map(eachItem => (
            <TeamCard eachCardItem={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div data-testid="loader">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.gotRender()
        )}
      </div>
    )
  }
}

export default Home
