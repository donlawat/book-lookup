function booklookup(AmazonService){
this.AmazonService = AmazonService
    
    this.search = (ispn) => {
        var SearchAmazon = this.AmazonService(ispn)
        return SearchAmazon 
    }

}

test ('Booklookup',()=> {
const AmazonService = jest.fn('1209700742055')
                        .mockReturnValue({bookname:'MooWhanstory',cover:'image',ispn:'1209700742055'})

var app = new booklookup (AmazonService)
var ispn = '1209700742055' 
var searchispn = app.search (ispn)

expect(AmazonService).toHaveBeenCalled()
expect(AmazonService).toHaveBeenCalledWith(ispn)
expect(searchispn).toEqual({ bookname:'MooWhanstory',cover:'image',ispn:'1209700742055'})
expect(searchispn.bookname).toBe('MooWhanstory')
expect(searchispn).toHaveProperty('cover')
expect(searchispn).toHaveProperty('bookname')
expect(searchispn).toHaveProperty('ispn')
expect(searchispn.cover).toBe('image')
expect(searchispn.ispn).toBe('1209700742055')



})