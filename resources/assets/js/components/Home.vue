<template>
	<div>
		<nav class="panel column is-offset-2 is-8">
		  	<p class="panel-heading">
		  	VueJs Phonebook
			    <button class="button is-link is-outlined" @click="openAdd">
			      Add New
			    </button>
		  	</p>
		  	<div class="panel-block">
			    <p class="control has-icons-left">
			      <input class="input is-small" type="text" placeholder="search">
			      <span class="icon is-small is-left">
			        <i class="fas fa-search" aria-hidden="true"></i>
			      </span>
			    </p>
		  	</div>
		  
		  	<a class="panel-block">
			    <span class="column is-9">
			      marksheet
			    </span>
			    
			    <span class="panel-icon column is-1">
			      <i class="has-text-danger fa fa-trash" aria-hidden="true"></i>
			    </span>

			    <span class="panel-icon column is-1">
			      <i class="has-text-info fa fa-edit" aria-hidden="true"></i>
			    </span>

			    <span class="panel-icon column is-1">
			      <i class="has-text-primary fa fa-eye" aria-hidden="true"></i>
			    </span>
		  	</a>

		</nav>

		<add :openModal='addActive' @closeRequest='closeModal'></add>

	</div>
	
</template>


<script>

	let add = require('./Add.vue');

	export default{
		components: {add},
		data() {
			return{
				addActive: '',
				lists: {},
				errors: {}
			}
		},
		methods: {
			openAdd: function(){
				this.addActive = "is-active"
			},
			closeModal: function(){
				this.addActive = ''
			}
		},
		created: function(){
			axios.get('phonebook/get-data')
			.then((response) => this.lists = response.data)
			.catch( (error) => this.errors = error.response.data.errors)
		}
	}
	
</script>