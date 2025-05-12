interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Postal SG : Visualizing Singapore Postal Code System',
    description: `What does 120k postal codes in Singapore look like? This project visualizes the distribution of the postal code system and provides an interactive view of the postal code system in Singapore.`,
    imgSrc: '/static/images/projects/postal-sg.png',
    href: 'https://stories.bearylogical.net/postal-sg',
  },
  {
    title: 'Gahmen Explorer : Visualizing Singapore Government Data',
    description: `Gahmen Explorer aims to make government data more accessible and understandable. Information on the Singapore budget and the organization structure of the pubic service is visualized in a more interactive way. The project is built using svelte and Go .`,
    imgSrc: '/static/images/projects/gahmen-sg.png',
    href: 'gahmen.bearylogical.net',
  },
]

export default projectsData
