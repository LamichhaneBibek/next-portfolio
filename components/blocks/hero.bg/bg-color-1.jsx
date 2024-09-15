import hero from '../../../styles/sections/index/hero.module.scss';

export default function bgColor1() {
	return (
		<div className={`${hero.colorfulV1}`}>
			<div className={`${hero.barContainer} noEvents`}>
				<div className={`${hero.barGradient}`}></div>
			</div>
			<div className={`${hero.radialContainer} noEvents`}>
				<div className={`${hero.radialGradient}`}></div>
			</div>
		</div>
	)
}