const router = require('express').Router();
const { Topic, Subject } = require('../models');

// GET all Topics for homepage
router.get('/', async (req, res) => {
  try {
    const dbTopicData = await Topic.findAll({
      include: [
        {
          model: Subject,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const topics = dbTopicData.map((topic) =>
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

// GET one topic
router.get('/topic/:id', async (req, res) => {
  try {
    const dbTopicData = await Topic.findByPk(req.params.id, {
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

    const topic = dbTopicData.get({ plain: true });
    res.render('topic', { topic, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one subject
router.get('/subject/:id', async (req, res) => {
  try {
    const dbSubjectData = await Subject.findByPk(req.params.id);

    const subject = dbSubjectData.get({ plain: true });
    res.render('subject', { subject, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
