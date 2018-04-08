<template>
<div>
  <FlowChart :isMap="false"> 
    <div slot="attrbute">
      <div style="width:100%;height:100%">
        <Row>
			<Col span="8">
				<Button type="text">属性名</Button>
				
			</Col>
      <Col span="16">
				<Button type="text">属性值</Button>
			</Col>
      <Col span="8">
				<span type="text">TextTextTextTextTextText</span>
			</Col>
      <Col span="16">
				<Input v-model="value" placeholder="Enter something..." />
			</Col>
        </Row>
      </div>
    </div>
  </FlowChart>
 
</div>
</template>

<script>
import FlowChart from '~/components/FlowChart/index'
// import pdfurl from '~/plugins/Images.pdf'
export default {
  components: {
    FlowChart
  }
}
</script>