<template>
  <Body>
    <template v-slot:page-title-icon>
      <fa :icon="['fas', 'book-skull']" />
    </template>
    <template v-slot:page-content>
      <Card>
        <template v-slot:card-title
          >Slots are for creating layout templates</template
        >
        <template v-slot:card-content>
          <p>
            Slots are like props, except you can send an entire vue component.
          </p>

          <p>
            They can have default data to display, but it's not required. Slots
            cannot have class or style attributes, so at least a &gt;div&lt; is
            required to add css.

            <em>An empty slot's elements are still rendered by the Dom.</em>
            For example, there is no footer on this top card, but there is still
            an empty div with the class <strong>card-footer</strong> in the
            inspector.
          </p>
          <br />
          <p>Parent's Syntax Example:</p>
          <p class="code-text">
            &lt;template v-slot:card-title&gt;Example Title
            Slot&lt;/template&gt;
          </p>
          <br />
          <p>Child's Syntax Example:</p>
          <div class="code-text">
            <p>&lt;h3 class="card-title"&gt;</p>
            <p class="code-text">
              &lt;slot name="card-title">Card Title&lt;/slot&gt;
            </p>
            <p>&lt;/h3&gt;</p>
          </div>
        </template>
        <template v-slot:card-footer> </template>
      </Card>

      <Card>
        <template v-slot:card-title>Example Title Slot</template>
        <template v-slot:card-content
          >Example Content Slot
          <Card>
            <template v-slot:card-title>Example Title Slot</template>
            <template v-slot:card-content
              >Example Content Slot
              <Card>
                <template v-slot:card-title>Example Title Slot</template>
                <template v-slot:card-content
                  >Example Content Slot
                  <Card>
                    <template v-slot:card-title>Example Title Slot</template>
                    <template v-slot:card-content
                      >Example Content Slot
                    </template>
                    <template v-slot:card-footer>Example Footer Slot</template>
                  </Card></template
                >
                <template v-slot:card-footer>Example Footer Slot</template>
              </Card></template
            >
            <template v-slot:card-footer>Example Footer Slot</template>
          </Card>
        </template>
        <template v-slot:card-footer>Example Footer Slot</template>
      </Card>
    </template>
  </Body>
</template>

<script setup lang="ts">
import Body from "../components/Body.vue";
import Card from "../components/Card.vue";
</script>
<style lang="scss"></style>
