<template>
  <div class="personal-details-user-form">
    <SwPersonalInfo>
      <template #message>
        <SfHeading
          title="1. Personal details"
          :level="2"
          class="sf-heading--left sf-heading--no-underline title"
        />
      </template>
    </SwPersonalInfo>
    <SfButton
      class="personal-details-user-form__proceed"
      @click="$emit('proceed')"
    >
      Continue to shipping
    </SfButton>
  </div>
</template>
<script>
import { SfButton, SfHeading } from '@storefront-ui/vue'
import SwPersonalInfo from '@shopware-pwa/default-theme/components/forms/SwPersonalInfo'

export default {
  name: 'ShippingAddressUserForm',
  components: {
    SfButton,
    SfHeading,
    SwPersonalInfo,
  },
  setup() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
@import '~@storefront-ui/vue/styles';

.personal-details-user-form {
  &__proceed {
    margin-top: 1rem;
  }
}

.title {
  --heading-padding: var(--spacer-base) 0;
  @include for-desktop {
    --heading-title-font-size: var(--h3-font-size);
    --heading-padding: var(--spacer-2xl) 0 var(--spacer-base) 0;
  }
}
</style>
