<template>
  <div class="shipping-list">
      <SfTabs
        key="address-list"
        v-if="listAddresses"
      >
        <SfTab title="Shipping details">
          <p class="message">
            Manage all the shipping addresses you want (work place, home address
            ...) This way you won't have to enter the shipping address manually
            with each order.
          </p>
          <sw-address-list @editAddress="editAddress" />
          <SfButton class="action-button" @click="changeAddress">
            Add new address
          </SfButton>
        </SfTab>
      </SfTabs>
      <SfTabs v-else>
        <SfTab title="Add address">
          <nuxt-child />
        </SfTab>
      </SfTabs>
  </div>
</template>
<script>
import { SfTabs, SfButton } from '@storefront-ui/vue'
import { useUser } from '@shopware-pwa/composables'
import SwAddressList from '@shopware-pwa/default-theme/components/SwAddressList.vue'

export default {
  name: 'MyAddresses',
  components: {
    SfButton,
    SfTabs,
    SwAddressList
  },
  data() {
    return {
      listAddresses: true
    }
  },
  methods: {
    changeAddress() {
      this.$router.push(this.$i18n.path('addresses/add'))
    },
    editAddress(addressId) {
      this.$router.push(this.$i18n.path(`addresses/add/${addressId}`))
    },
  },
  watch: {
    $route: {
      deep: true,
      handler(from, to) { 
        this.listAddresses = !this.listAddresses
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@storefront-ui/vue/styles.scss';



.shipping-list {
  margin-bottom: var(--spacer-xl);
  width: 100%;
}
</style>
