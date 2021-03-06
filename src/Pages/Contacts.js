import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { fetchContacts } from '../store/appFeed/actions'
import { selectContacts } from '../store/appFeed/selectors'
import { selectToken } from '../store/user/selectors'
import { useSelector, useDispatch } from 'react-redux'
import { Box, Grid } from '@material-ui/core'
import ContactBook from '../Components/ContactBook'
import AddContactForm from '../Components/AddContactForm'

export default function Contacts() {
	const dispatch = useDispatch()
	const contacts = useSelector(selectContacts)
	const token = useSelector(selectToken)
	const history = useHistory()

	if (!token) {
		history.push('/login')
	}

	useEffect(() => {
		dispatch(fetchContacts)
	}, [dispatch])

	return (
		<>
			<Box mt={12} mx={3} className="mt-5">
				<Grid container direction='row' justify='flex-start' className="mt-5">
					<Grid item xs={12} className="mt-5" sm={7}><ContactBook contacts={contacts}/></Grid>
					<Grid item xs={12} className="mt-5" sm={5}><AddContactForm/></Grid>
				</Grid>
			</Box>
		</>
	)
}
