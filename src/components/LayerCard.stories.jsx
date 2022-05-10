import { LayerCard } from "./LayerCard"

export default {
  title: 'LayerCard',
  component: LayerCard,
}

const Template = (props) => <LayerCard {...props} />

export const Default = Template.bind({});
Default.props = {
  text: 'Flood zone 3'
}
