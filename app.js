const app = Vue.createApp({
    data() {
      return {
        showBooks: true,
        books: [
          { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: false },
          { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg', isFav: false },
          { title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpg', isFav: false },
        ],
      }
    },
    methods: {
      // hide / show books
      toggleShowBooks() {
        this.showBooks =  !this.showBooks
      },
      //set the book as a favorite
      toggleFav(book) {
        book.isFav = !book.isFav;
      },
    },
    // show a list of favorite books
    computed: {
      filteredBooks() {
        return this.books.filter(book => book.isFav)
      }
    }
  })
  
  app.mount('#app')