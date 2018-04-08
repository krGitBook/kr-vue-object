<template>
    <Tree :data="data2" @on-check-change="checkChange" ref="tree"  show-checkbox></Tree>
</template>
<script>
    export default {
        data () {
            return {
                dom:'',
                data2: [
                    {
                        title: 'parent 1',
                        expand: true,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1'
                                    },
                                    {
                                        title: 'leaf 1-1-2'
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1'
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        methods:{
            checkChange(values){
                console.log(values,"pppppppp",this.$refs.tree.getCheckedNodes())

            },
            getDom(event){
                console.log(event)
            },
            treeChange(){
                this.data.map()
            }
        }
    }
</script>