<!--
@license GNU AGPL version 3 or any later version

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.
-->
<template>
  <div>
    <ul class="side-menu-setting-list" :class="{hide: values.length === 0}">
      <li v-for="item in values" class="side-menu-setting-list-item" v-on:click="showEditForm(item)">
        <span v-text="item.en"></span>
      </li>
    </ul>

    <NcActions>
      <NcActionButton @click="showAddForm" icon="icon-add"></NcActionButton>
    </NcActions>

    <NcModal v-if="addForm" @close="hideAddForm">
      <div class="modal__content">
        <div v-for="lang in langs">
          <span class="lang" v-text="lang"></span>
          <input type="text" v-model="newValue[lang]" required style="width: calc(100% - 100px)">
        </div>

        <NcActions>
          <NcActionButton @click="saveAdd" icon="icon-checkmark"></NcActionButton>
        </NcActions>
      </div>
    </NcModal>

    <NcModal v-if="editForm" @close="hideEditForm">
      <div class="modal__content">
        <div v-for="lang in langs">
          <span class="lang" v-text="lang"></span>
          <input type="text" v-model="editValue[lang]" required style="width: calc(100% - 100px)">
        </div>

        <div class="pull-right">
          <NcActions>
            <NcActionButton @click="removeEdit" icon="icon-delete"></NcActionButton>
          </NcActions>
        </div>

        <NcActions>
          <NcActionButton @click="saveEdit" icon="icon-checkmark"></NcActionButton>
        </NcActions>
      </div>
    </NcModal>
  </div>
</template>

<style>
.modal__content {
  padding: 10px;
}

.modal__content .lang {
  width: 60px;
  display: inline-block;
  padding: 4px;
  box-sizing: border-box;
}

.pull-right {
  float: right;
}
</style>

<style scoped>
.hide {
  display: none;
}
</style>

<script>
import NcModal from '@nextcloud/vue/dist/Components/NcModal'
import NcActions from '@nextcloud/vue/dist/Components/NcActions'
import NcActionButton from '@nextcloud/vue/dist/Components/NcActionButton'

export default {
  name: 'AdminCategoriesCustom',
  components: {
    NcModal,
    NcActions,
    NcActionButton,
  },
  data() {
    return {
      input: null,
      values: [],
      langs: [],
      addForm: false,
      editForm: false,
      newValue: {},
      editValue: {},
    }
  },
  methods: {
    init() {
      this.values = JSON.parse(this.input.value)
      this.langs = JSON.parse(this.input.getAttribute('data-langs'))
    },
    update() {
      this.input.value = JSON.stringify(this.values)
    },
    showAddForm() {
      this.newValue = {id: 'cat' + Math.random().toString().replace('0.', '')}

      this.addForm = true
    },
    showEditForm(value) {
      this.editValue = {id: value.id}

      for (let i of this.langs) {
        this.editValue[i] = typeof value[i] !== 'undefined' ? value[i] : ''
      }

      this.editForm = true
    },
    saveAdd() {
      for (let i of this.langs) {
        if (!this.newValue[i] || /^\s*$/.test(this.newValue[i])) {
          return
        }
      }

      this.values.push(this.newValue)
      this.update()
      this.hideAddForm()
      this.newValue = {}
    },
    saveEdit() {
      for (let i of this.langs) {
        if (!this.editValue[i] || /^\s*$/.test(this.editValue[i])) {
          return
        }
      }

      for (let i in this.values) {
        if (this.values[i].id === this.editValue.id) {
          this.values[i] = this.editValue
        }
      }

      this.update()
      this.hideEditForm()
    },
    removeEdit() {
      for (let i in this.values) {
        if (this.values[i].id === this.editValue.id) {
          this.values.splice(i, 1);
        }
      }

      this.update()
      this.hideEditForm()
    },
    hideAddForm() {
      this.addForm = false
    },
    hideEditForm() {
      this.editForm = false
    },
  },
  mounted() {
    this.input = document.querySelector('input[name="categories-custom"]')
    this.init()
  }
}
</script>
