import React , { useState , useEffect } from 'react'
import { Map, Marker, TileLayer , Popup } from 'react-leaflet'
import L from 'leaflet'
import { useHistory } from 'react-router-dom'
import { Typography, Button } from '@material-ui/core'

export default function LeafletMap(props) {
    const [activeLead, setActiveLead] = useState(null)
    const lat = props.lat
    const lng = props.lng
    const id = props.id;
    const allLeads = props.allLeads
    const history = useHistory()

    const getMarkerIcon = (salesCyclePhaseId) => {
		switch (salesCyclePhaseId) {
			case 1:
				return require('../Icons/white.png')
				break
			case 2:
				return require('../Icons/dark_blue.png')
				break
			case 3:
				return require('../Icons/light_blue.png')
				break
			case 4:
				return require('../Icons/turquoise.png')
				break
			case 5:
				return require('../Icons/green.png')
				break
			case 6:
				return require('../Icons/yellow.png')
				break
			case 7:
				return require('../Icons/red.png')
				break
			default:
				return require('../Icons/white.png')
		}
	}

    const getIcon = (lead) => {
		if (!lead) {
			return null
		} else {
			return L.icon({
				iconUrl: getMarkerIcon(lead.salesCyclePhase.id),
				iconSize: 38,
			})
		}
	}

    const handleMoreInfo = () => {
		history.push(`/leads/${activeLead.id}`)
	}

    return (
            <Map center={[lat, lng]} zoom={14}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> 
                    contributors' 
                /> 

                <Marker key={props.id}
                        position={[lat, lng]}/>

                        {
                            allLeads.map((val,key)=>{
                                if(val.id !== id){
                                return (
                                    <Marker key={key}
                                    icon={getIcon(val)}
                                    onClick={() => {
                                        setActiveLead(val)
                                    }}
                                    position={[val.lat, val.lng]}/>
                                )
                                }
                            })
                        }

            {activeLead && (
				<Popup
					position={[activeLead.lat, activeLead.lng]}
					onClose={() => {
						setActiveLead(null)
					}}>
					<div>
						<Typography variant='h5'>{activeLead.company_name}</Typography>
						<Button onClick={handleMoreInfo}>Meer info</Button>
					</div>
				</Popup>
			)}


            </Map>
    )
}
