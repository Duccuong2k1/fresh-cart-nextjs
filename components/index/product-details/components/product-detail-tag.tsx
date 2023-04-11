import React from 'react'

type Props = {}

export function ProductDetailTag({ }: Props) {
    const description = `<h4><strong>Nutrient Value &amp; Benefits</strong></h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing sagittis sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p><strong>Storage Tips</strong></p><p>&nbsp;</p><p>Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing sagittis sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p><strong>Unit</strong></p><p>&nbsp;</p><p>3 units</p><p><strong>Seller</strong></p><p>&nbsp;</p><p>DMart Pvt. LTD</p><p><strong>Disclaimer</strong></p><p>&nbsp;</p><p>Image shown is a representation and may slightly vary from the actual product. Every effort is made to maintain accuracy of all information displayed.</p>`
    return (
        <>
            <div
                className="ck-content"
                dangerouslySetInnerHTML={{
                    __html: description,
                }}
            ></div>
        </>
    )
}