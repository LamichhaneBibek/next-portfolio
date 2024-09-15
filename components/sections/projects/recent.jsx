// Section structure
import Section 		from '../../structure/section';
import Container 	from '../../structure/container';

import Image from 'next/image'

import Icon from '../../utils/icon.util'

import css from '../../../styles/sections/projects/recent.module.scss'


export default function GitProjects({ repos, user }) {
	if (!user || user.length === 0) {
		// Display a message or handle the case when user is empty
		return <p>No user data available.</p>;
	  }
	return (
		<Section classProp={css.section}>
			<Container classProp={css.container} spacing={'verticalXXXLrg'}>
				<h3>Recent Projects</h3>
				<section className={css.profile}>
					<Image className={css.profilePhoto} src={`${user[0].avatar_url}`} alt="Github Profile Photo" height={80} width={80}/>
					<span class={css.details}>
						<p>{user[0].name}</p>
						<a href={user[0].html_url} rel="noreferrer" target="_blank">{user[0].html_url} <Icon icon={[ 'far', 'arrow-up-right-from-square' ]} /></a>
					</span>
				</section>
				<div className={css.projects}>
					{
					repos.map((repo, index) => (
						<article key={repo.id || index} className={css.project}>
							<span className={css.header}>
								<a href={repo.html_url} rel="noreferrer" target="_blank">{repo.name} <Icon icon={[ 'fad', 'arrow-up-right-from-square' ]} /></a>
								<p className={css.homepage}>{repo.homepage}</p>
							</span>
							<span className={css.descriptionContainer}>
 									<p className={css.description}>{repo.description}</p>
 								</span>
 								<span className={css.details}>
 									<p><i className={`devicon-${repo.language}-plain colored`} /> {repo.language}</p>
 									<p><Icon icon={[ 'fad', 'star' ]} /> {repo.watchers}</p>
 									<p><Icon icon={[ 'fad', 'code-branch' ]} /> {repo.forks_count}</p>
 									<p className={css.pushedAt}>{repo.date}</p>
 								</span>
 								<span className={css.topicsContainer}>
 									{
									repo.topics.map( (e, index) => {
										return ( <span key={index} className={css.topics}><i class="devicon-github-plain"></i> {e}</span> )
									})
									}
								</span>
						</article>
					))
					}
				</div>
			</Container>
		</Section>
	)
}
