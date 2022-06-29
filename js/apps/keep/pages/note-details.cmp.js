import longText from '../cmps/long-text.cmp.js'

export default {
	props: ['note'],
	template: `
    <section class="note-details-modal">
        <div class="img">
            <img :src="note.thumbnail
    " alt="">
        </div>
        <div class="details-text-modal">
            <h3>{{note.title}}</h3>
            <h4 class="note-subtitle">{{note.subtitle}}</h4>
            <p>By:
                <span v-for="author in note.authors">
                  <a href="#">{{author}} </a> (Author) 
                </span>
            </p>
            <h3>Description</h3>
            <long-text :text="note.description"></long-text>

            <h3>Product Details</h3>
            <div class="product-details-modal">
                <p> Price <span :class="priceClass">{{priceToDisplay}}</span></p>
                <p> Publish Date <span> {{note.publishedDate}}</span> <span>{{publishDateMsg
                  }}</span></p>
                <p> Pages <span>{{note.pageCount}}</span> <span>{{pageCountMsg}}</span></p>
                <p>Language <span>{{note.language}}</span></p>
                <p> EAN/UPC <span> {{note.id}}</span></p>
            </div>
            <div class="categories-modal">Categories 
              <a href="#" v-for="category in note.categories">
              {{category}} </a>
            </div>
         </div>
        <button class="close-modal" @click="$emit('close')">Close</button>
    </section>
  `,
	data() {
		return {}
	},
	methods: {},
	computed: {
		priceToDisplay() {
			return new Intl.NumberFormat('en-EN', { style: 'currency', currency: this.note.listPrice.currencyCode }).format(this.note.listPrice.amount)
		},
		pageCountMsg() {
			const pageCount = this.note.pageCount
			if (pageCount > 500) return ' Long reading'
			else if (pageCount > 200) return ' Decent reading'
			else if (pageCount < 100) return ' Light reading'
		},
		publishDateMsg() {
			const publishDate = this.note.publishedDate
			const currYear = new Date().getFullYear()
			const diff = currYear - publishDate
			if (diff > 10) return ' Veteran note'
			else if (diff < 1) return ' New note'
		},
		priceClass() {
			const price = this.note.listPrice.amount
			if (price > 150) return 'red'
			else if (price < 20) return 'green'
		},
	},

	components: {
		longText,
	},
}
