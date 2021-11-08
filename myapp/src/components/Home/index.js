

import {Component} from 'react'
import axios from "axios"

import Loader from 'react-loader-spinner'

import { Label,Input,Div,Button } from './styleComponent'
import Header from '../Header'

const apiConstants = {
    initial: 'apiInitial',
    progress: 'apiProgress',
    success: 'apiSuccess',
    failure: 'apiFailure'
}

class Home extends Component{
    state={api: apiConstants.initial, ll:'',result: []}

    openForm = () =>{
        this.setState({api: apiConstants.initial, ll:'',result: []})
    }

    lonAndLat = (event) =>{
        this.setState({ll: event.target.value})
    }

    book = (event) =>{
        this.setState({api: apiConstants.progress})
        event.preventDefault()
        const {ll} = this.state
        console.log("ll:",ll)
        axios.get(`http://localhost:3001/cabs?lat=${ll}`)
            .then(res => {
                const results = res.data.map((eachItem)=>({
                    id: eachItem.id,
                    driver: eachItem.driver,
                    number_plate: eachItem.number_plate,
                    latitude: eachItem.location.coordinates[1],
                    longitude: eachItem.location.coordinates[0],
                }))
                if(results.length!==0){
                    this.setState({api: apiConstants.success,result: results})
                }else{
                    this.setState({api: apiConstants.failure})
                }
            })
        
    }

    bookTaxi = () =>(
        <div>
            <h1>Book a Taxi</h1>
            <form style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
            }}>
                <Div>
                    <Label>Pick up</Label>
                    <Input type="text" onChange={this.lonAndLat} placeholder="Enter Latitude and Longitude"/>
                </Div>
                <Div>
                    <Label>Drop</Label>
                    <Input type="text" placeholder="Enter Location"/>
                </Div>
                <Div>
                    <Label>When</Label>
                    <Input type="datetime-local" />
                </Div>
                <Button onClick={this.book}>Search Nearby Cabs</Button>
            </form>
        </div>
                        
    )
    
    inProgress = () =>(
        <div>
            <Loader type="Oval" color={'#f68e1e'} height={50} width={50} />
        </div>
    )

    successView = () =>{
        const {result, ll} = this.state
        return(
            <>
            <h1>Results of {ll} </h1>
            <p>
                {JSON.stringify(result)}
            </p>
            <Button onClick={this.openForm}>Search another location</Button>
            </>
        )
    }

    failureView = () =>(
        <div>
            <h1>Sorry, no cabs near by</h1>
            <Button onClick={this.openForm}>Back</Button>
        </div>
    )

    render(){
        const {api} = this.state 
        
        let f
        switch(api){
            case apiConstants.initial:
                f = this.bookTaxi()
                break;
            case apiConstants.progress:
                f = this.inProgress()
                break;
            case apiConstants.success:
                f = this.successView()
                break;
            case apiConstants.failure:
                f = this.failureView()
                break;
            default:
                break;
        }
        
        return(
            <div>
                <Header />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '80vh'
                }}>
                    {f}
                </div>
            </div>
        )
    }
}

export default Home