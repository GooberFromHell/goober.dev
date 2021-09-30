let rw = 25
let itemHeight = 50
function sizeItems() {
	$(".terminal").map((index, child) => {
		let roundedWidth = (Math.round($(child).outerWidth() / rw) + 1) * rw
		$(child).outerWidth(roundedWidth)
		// let roundedHeight = (Math.round($(child).outerHeight() / itemHeight) + 1) * itemHeight
		// $(child).find("code").outerHeight(roundedHeight)
	})
}
jQuery(function () {
	$(".term-container")
		.children()
		.each((index, child) => {
			if (!$(child).is("pre")) {
				$(child.remove())
			}
		})

	sizeItems()

	let $grid = $(".term-container")
	$grid.isotope({
		itemSelector: ".terminal",
		layoutMode: "fitRows",
		percentPosition: true
	})

	$(".shuffle").click(() => $grid.isotope("shuffle"))
})
