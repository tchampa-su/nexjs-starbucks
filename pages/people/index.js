import Layout from '../../components/layout'



export default function People() {
    return (
        <Layout>
            <h1>People</h1>
        </Layout>
    )
}

/*export async function getStaticPaths() {

    const allSlugs = await getPeople()

    const paths = allSlugs.edges.map(edge => {
        const { slug } = edge.node
        return {
            params: {
                id: slug
            }
        }
    })

    return {
        paths,
        fallback: false
    }

}*/