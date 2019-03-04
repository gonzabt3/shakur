<template>
  <div>
    <b-form-group 
      :label="label" 
      :label-for="name">
      <b-form-select 
        :id="name" 
        :options="options" 
        :value="value" 
        :disabled="disabled" 
        :name="name" 
        text-field="description" 
        value-field="id"
        @change.native="$emit('change', $event.target.value);" />
    </b-form-group>
  </div>
</template>
<script>
export default {
    name: "MpSelect",
    model: {
        prop: "value",
        event: "change"
    },
    props: {
        value: { type: [Number, String], default: null },
        disabled: { type: Boolean, default: false },
        name: { type: String, default: "" },
        label: { type: String, default: "" },
        url: { type: String, default: "" },
        valueName: { type: String, default: "id" },
        textName: { type: String, default: "nombre" }
    }, 
    // inject: ["$validator"],
    data() {
        return {
            error: "",
            options: [
                {
                    id: null,
                    description: "Seleccionar una opción",
                    disabled: true
                }
            ]
        };
    }, //Inyecto el validador del padre
    computed: {
        hasErrors() {
            return this.error !== "";
        }
    },
    mounted() {
        this.getValues();
    },
    methods: {
        getValues() {
            // console.log("url select:",this.url);
            // this.options=[]
            this.axios
                .get(this.url)
                .then((response) => {
                    // console.log(response);
                    let responseOptions = _.map(response.data, option => {
                        return {
                            id: option[this.valueName],
                            description: option[this.textName]
                        };
                    });
                    this.options = _.union(this.options, responseOptions);
                    this.error = "";
                })
                .catch(error => {
                    this.error =
                        "Ocurrió un error al llenar los valores de este selector";
                });
        }
    }
};
</script>
<style></style>
