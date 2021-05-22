import Layout from '../../components/layout'
import Row from '../../components/row'
import Card from'../../components/card'
import Col from '../../components/col'
import Section from '../../components/section'
import { getAllMenuTypesAndMenuItems } from '../../lib/api'

export async function getStaticProps() {

    const menuTypes = await getAllMenuTypesAndMenuItems ()

    return {
        props: {menuTypes}
    }
}

export default function Menu({menuTypes}) {
    return (
        <Layout>
            <h1>Menu</h1>
            <p>Menu introduction</p>
            {menuTypes.edges.map(edge => {
                const { name, items } = edge.node;
                return <Section title={name}>
                    <Row justifyContentCenter>
                {items.edges.map((edge, index) => {
                    const { node } = edge;
                        
                        return <Col sm={6} md={4} lg={3}key={index}>
                        <Card node={node}/>
                        </Col>
                         })}
                    </Row>
                    
                </Section>
            })}
        </Layout>
    )
}
