const router = require('express').Router();
const { Topic, Subject } = require('../models');

// const router = require('express').Router();
// const { Gallery, Painting } = require('../models');

// Get all topics for homepage
router.get('/', async (req, res) => {
  try {
    const topicData = await Topic.findAll({
      include: [
        {
          model: Subject,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const topics = topicData.map((topic) =>
      topic.get({ plain: true })
    );
    res.render('homepage', {
      topics,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// GET all galleries for homepage
// router.get('/', async (req, res) => {
//   try {
//     const dbGalleryData = await Gallery.findAll({
//       include: [
//         {
//           model: Painting,
//           attributes: ['filename', 'description'],
//         },
//       ],
//     });

//     const galleries = dbGalleryData.map((gallery) =>
//       gallery.get({ plain: true })
//     );
//     res.render('homepage', {
//       galleries,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// Get one topic
router.get('/topic/:id', async (req, res) => {
  try {
    const topicData = await Topic.findByPk(req.params.id, {
      include: [
        {
          model: Subject,
          attributes: [
            'id',
            'title',
            'artist',
            'exhibition_date',
            'filename',
            'description',
          ],
        },
      ],
    });

    const topic = topicData.get({ plain: true });
    res.render('topic', { topic, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
// router.get('/gallery/:id', async (req, res) => {
//   try {
//     const dbGalleryData = await Gallery.findByPk(req.params.id, {
//       include: [
//         {
//           model: Painting,
//           attributes: [
//             'id',
//             'title',
//             'artist',
//             'exhibition_date',
//             'filename',
//             'description',
//           ],
//         },
//       ],
//     });

//     const gallery = dbGalleryData.get({ plain: true });
//     res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// Get one subject
router.get('/subject/:id', async (req, res) => {
  try {
    const subjectData = await Subject.findByPk(req.params.id);

    const subject = subjectData.get({ plain: true });
    res.render('subject', { subject, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one painting
// router.get('/painting/:id', async (req, res) => {
//   try {
//     const dbPaintingData = await Painting.findByPk(req.params.id);

//     const painting = dbPaintingData.get({ plain: true });
//     res.render('painting', { painting, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
