// Core packages
import { useEffect, useState } from 'react'

// Font Awesome packages
const { library, config } = require('@fortawesome/fontawesome-svg-core')
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fat } from '@danieloi/pro-thin-svg-icons'
import { fal } from '@danieloi/pro-light-svg-icons'
import { fad } from '@danieloi/pro-duotone-svg-icons'
import { far } from '@danieloi/pro-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Load icons into
library.add(fat, fal, fas, fad, far, fab)


export default function Icon({ icon }) {

	const [ iconType, iconKey ] = icon

	const [ stateIconKey, setIconKey ] = useState('circle-notch')

	useEffect( () => setIconKey( iconKey ), [ iconKey ] )

	return (
		<FontAwesomeIcon icon={[ iconType, stateIconKey ]} />
	)
}
