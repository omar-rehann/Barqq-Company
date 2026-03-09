import "./article.css"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Article(){
    return(
        <>
        <div className="article">
  <div className="row m-2">
    {/* Article 1 */}
    <div className="col-md-4 mb-4">
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Top 10 Carpet Cleaning Tips for Home</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Carpet Care</Card.Subtitle>
          <Card.Text>
            Easy and effective ways to keep your carpets fresh and spotless without harsh chemicals in all the world.
          </Card.Text>
          <Card.Link href="#">        <Button variant="success">Read More</Button>
</Card.Link>
        </Card.Body>
      </Card>
    </div>

    {/* Article 2 */}
    <div className="col-md-4 mb-4">
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Ultimate Guide to Deep Cleaning Your Kitchen</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Kitchen Tips</Card.Subtitle>
          <Card.Text>
            Step-by-step methods to remove grease, grime, and keep your kitchen hygienic every day.
          </Card.Text>
          <Card.Link href="#">
            <Button variant="success">Read More</Button>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>

    {/* Article 3 */}
    <div className="col-md-4 mb-4">
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Chemical-Free Bathroom Cleaning Secrets</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Bathroom Hacks</Card.Subtitle>
          <Card.Text>
            Natural techniques using vinegar and lemon to make your bathroom shine bright.
          </Card.Text>
          <Card.Link href="#">        <Button variant="success">Read More</Button>
</Card.Link>
        </Card.Body>
      </Card>
    </div>

    {/* Article 4 */}
    <div className="col-md-4 mb-4">
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Eco-Friendly Cleaning Hacks Everyone Should Know</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Green Living</Card.Subtitle>
          <Card.Text>
            Safe, natural ways to clean your home using vinegar, baking soda, and more.
          </Card.Text>
          <Card.Link href="#">        <Button variant="success">Read More</Button>
</Card.Link>
        </Card.Body>
      </Card>
    </div>

    {/* Article 5 */}
    <div className="col-md-4 mb-4">
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Quick Cleaning Routines for Busy People</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Time-Saving Tips</Card.Subtitle>
          <Card.Text>
            Clean your entire home in under 30 minutes a day with smart, fast hacks.
          </Card.Text>
          <Card.Link href="#">        <Button variant="success">Read More</Button>
</Card.Link>
        </Card.Body>
      </Card>
    </div>

    {/* Article 6 */}
    <div className="col-md-4 mb-4">
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>How to Remove Tough Stains from Upholstery</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Furniture Care</Card.Subtitle>
          <Card.Text>
            Effective tricks to get rid of coffee, wine, grease, and other stubborn marks.
          </Card.Text>
          <Card.Link href="#">        <Button variant="success">Read More</Button>
</Card.Link>
        </Card.Body>
      </Card>
    </div>

    {/* Article 7 */}
    <div className="col-md-4 mb-4">
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Best Ways to Clean Every Type of Floor</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Floor Cleaning</Card.Subtitle>
          <Card.Text>
            Pro techniques for hardwood, tile, laminate, and more to keep floors shining.
          </Card.Text>
          <Card.Link href="#">        <Button variant="success">Read More</Button>
</Card.Link>
        </Card.Body>
      </Card>
    </div>

    {/* Article 8 */}
    <div className="col-md-4 mb-4">
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Cleaning Tips Every Pet Owner Needs</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Pets & Home</Card.Subtitle>
          <Card.Text>
            Easily remove pet hair, odors, and accidents while keeping your home fresh in all the world of the section.
          </Card.Text>
          <Card.Link href="#">        <Button variant="success">Read More</Button>
</Card.Link>
        </Card.Body>
      </Card>
    </div>

    {/* Article 9 */}
    <div className="col-md-4 mb-4">
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Complete Seasonal Cleaning Checklist</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Home Organization</Card.Subtitle>
          <Card.Text>
            Full spring and fall cleaning plan to keep your home tidy and healthy all the world of the section.
          </Card.Text>
          <Card.Link href="#">        <Button variant="success">Read More</Button>
</Card.Link>
        </Card.Body>
      </Card>
    </div>

    {/* Article 10 */}
    <div className="col-md-4 mb-4">
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Why Professional Cleaning Is Worth It</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Cleaning Services</Card.Subtitle>
          <Card.Text>
            Save time and get deeper results – discover the real benefits of hiring pros all the world of the section.
          </Card.Text>
          <Card.Link href="#">        <Button variant="success">Read More</Button>
</Card.Link>
        </Card.Body>
      </Card>
    </div>

    {/* Article 11 */}
    <div className="col-md-4 mb-4">
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>How to Clean Your Fridge Like a Pro</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Appliance Care</Card.Subtitle>
          <Card.Text>
            Simple steps to remove odors, spills, and keep your refrigerator spotless all the world of the section.
          </Card.Text>
          <Card.Link href="#">        <Button variant="success">Read More</Button>
</Card.Link>
        </Card.Body>
      </Card>
    </div>

    {/* Article 12 */}
    <div className="col-md-4 mb-4">
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Eliminate Bad Odors from Your Home Forever</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Fresh Home Tips</Card.Subtitle>
          <Card.Text>
            Natural solutions for kitchen smells, pet odors, moisture, and more.
          </Card.Text>
          <Card.Link href="#">        <Button variant="success">Read More</Button>
</Card.Link>
        </Card.Body>
      </Card>
    </div>

    {/* Article 13 */}
    <div className="col-md-4 mb-4">
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Streak-Free Window Cleaning Tricks</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Glass Cleaning</Card.Subtitle>
          <Card.Text>
            Professional hacks to get crystal-clear windows without streaks or residue in all the world od any section.
          </Card.Text>
          <Card.Link href="#">        <Button variant="success">Read More</Button>
</Card.Link>
        </Card.Body>
      </Card>
    </div>

    {/* Article 14 */}
    <div className="col-md-4 mb-4">
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>15-Minute Daily Cleaning Routine That Works</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Daily Habits</Card.Subtitle>
          <Card.Text>
            Small habits that keep your home clean with almost no extra effort.
          </Card.Text>
          <Card.Link href="#">        <Button variant="success">Read More</Button>
</Card.Link>
        </Card.Body>
      </Card>
    </div>

    {/* Article 15 */}
    <div className="col-md-4 mb-4">
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Easy Ways to Clean Oven and Microwave</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Kitchen Appliances</Card.Subtitle>
          <Card.Text>
            Remove baked-on grease fast without dangerous chemicals.
          </Card.Text>
          <Card.Link href="#">        <Button variant="success">Read More</Button>
</Card.Link>
        </Card.Body>
      </Card>
    </div>

    {/* Article 16 */}
    <div className="col-md-4 mb-4">
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Cleaning Curtains, Pillows & Soft Furnishings</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Home Decor</Card.Subtitle>
          <Card.Text>
            Keep curtains, cushions, and throws fresh with minimal effort.
          </Card.Text>
          <Card.Link href="#">        <Button variant="success">Read More</Button>
</Card.Link>
        </Card.Body>
      </Card>
    </div>

    {/* Article 17 */}
    <div className="col-md-4 mb-4">
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>How to Prevent and Remove Mold & Mildew</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Moisture Problems</Card.Subtitle>
          <Card.Text>
            Effective ways to stop mold growth and maintain a healthy home.
          </Card.Text>
          <Card.Link href="#">        <Button variant="success">Read More</Button>
</Card.Link>
        </Card.Body>
      </Card>
    </div>

    {/* Article 18 */}
    <div className="col-md-4 mb-4">
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Safe Cleaning for Electronics & Screens</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Tech Cleaning</Card.Subtitle>
          <Card.Text>
            Dust and smudge removal tips for TVs, laptops, phones, and more.
          </Card.Text>
          <Card.Link href="#">        <Button variant="success">Read More</Button>
</Card.Link>
        </Card.Body>
      </Card>
    </div>

    {/* Article 19 */}
    <div className="col-md-4 mb-4">
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Common Cleaning Mistakes to Avoid</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Cleaning Tips</Card.Subtitle>
          <Card.Text>
            Habits that waste time or damage surfaces – and how to fix them.
          </Card.Text>
          <Card.Link href="#">        <Button variant="success">Read More</Button>
</Card.Link>
        </Card.Body>
      </Card>
    </div>

    {/* Article 20 */}
    <div className="col-md-4 mb-4">
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Quick Home Prep Before Guests Arrive</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Guest Ready</Card.Subtitle>
          <Card.Text>
            Fast checklist to make your home look perfect in record time.
          </Card.Text>
          <Card.Link href="#">        <Button variant="success">Read More</Button>
</Card.Link>
        </Card.Body>
      </Card>
    </div>

  </div>
</div>
        </>
    )
}
export default Article