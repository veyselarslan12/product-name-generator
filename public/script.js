document.getElementById('description-form').addEventListener('submit', async (event) => {
    event.preventDefault()

    const input = document.getElementById('description-input').value 
    const resultList = document.getElementById(result-list)
    resultList.innerHTML = ''

    try {
        const response = await fetch('/generate-product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'  
            },
            body: JSON.stringify({ prompt: input })
        })

        if (response.ok) {
            const data = await response.json()
            const products = data.split('\n').filter(product => product.trim() !== '')

            products.forEach(product => {
                const li = document.createElement('li')
                li.textContent = product
                resultList.appendChild(li)
            })
        } else {
            resultList.textContent = 'Error generating product names.'
        }
    } catch (error) {
        console.log(error)
    }
})