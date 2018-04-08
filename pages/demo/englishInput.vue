<template>
  <section class="container">
    <div>
     <EnglishInput />
    </div>
  </section>
</template>

<script>
import EnglishInput from '~/components/EnglishInput.vue'

export default {
     transition (to, from) {
        if (!from) return 'slide-left'
        return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
    },
    components: {
        EnglishInput
    }
}
</script>
