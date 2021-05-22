import Layout from '../../components/layout'



export default function Locations() {
    return (
        <Layout>
            <h1>Locations</h1>
        </Layout>
    )
}
/*export async function getStaticPaths() {

    const allSlugs = await getLocations()

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