---
layout: post
title:  "Course Report: DataTalksClub - ML Zoomcamp, pt 2/2"
subtitle: Weeks 5+
date:   2022-12-26
categories: data learning course-review
---

This is a follow up to [part 1 of this course review series]({% post_url 2022-10-02-dtc-ml-zoomcamp-pt1 %}). If you'd like an overview of the course and why I enrolled as a somewhat seasoned analyst, check out that post.

### TL;DR

1. I liked the 2nd half of the course even more than the first, which I already held in high regard.
2. The second half of this course largely focused on deep-learning and introduced some of the issues/concepts that are important when it comes to deploying an ML model.
    * Additional deployment learning can be found (free) in Alexey's [ML Ops Zoomcamp][1].
3. Alexey maintained the "accessible, but not overly-simplistic" model that was emphasized in the first half of the course.
    * He readily admitted that there's __a lot__ more to the theory and techniques behind deep-learning. He recommended the Stanford Course, [CS231n: Convolutional Neural Networks for Visual Recognition][2], which looks  helpful and has its content available free of charge.
4. The course's core content was augmented by other resources made available to students:
    1. Alexey got together a [Kaggle competition][3] in conjunction with some of the course sponsors that could optionally be used as a focus for the capstone project. I loved this because one of my least favorite parts of capstone projects is having to decide what dataset to work with.
    2. For training our deep-learning models, Data Talks Club and [SaturnCloud][4] partnered to ensure all students got 30 hours of free compute time, allowing the students to have GPU resources that didn't take a bite out of their wallet.

# Course Review

## Content

To wrap up the first half of the course, additional techniques for classification and regression were covered and then focus shifted to introduce the concept of model 'deployment'. This area of focus had never been covered in other ML courses I've taken, and was one of the principal reasons the course caught my eye. Included in these sections were:
* An introduction to Docker
* Techniques for environment and dependency management
* Using Flask to serve a model (both locally and on AWS Elastic Beanstalk)
* An introduction to [BentoML][5], a very cool product that helps simplify model deployment.

As mentioned above, the 2nd half of the course focused on deep-learning, largely in the context of image classification using the Keras/Tensorflow ecosystem. Theory was covered at a very high level, as to not discourage those without a rigorous mathematics background - however it was readily acknowledged that the importance of understanding the theory behind these techniques should not be ignored - and students were encouraged to explore it with the [Stanford course mentioned above][2]. The deep learning portion did cover the various types of layers in Convolutional Neural Networks and the chief techniques behind creating models and improving their performance. These included transfer-learning, tuning the learning rate, checkpointing, dropout, and data-augmentation.

Similar to the end of the first half, the end of the course shifted focus to the additional work needed to take a model from development to 'production'. This included:
* Establishing a basic understanding of the issues presented when deploying TensorFlow and deep learning models to production environments
* Utilizing the [TensorFlow-Lite][6] library to deploy a model to AWS Lambda Functions.
* An introduction to Kubernetes (both locally and using Amazon EKS), [TensorFlow Serving][7], and how this setup solves issues presented when serving a TensorFlow model.
    * Peripherally, Docker Compose was also introduced in this module as a welcome addition.
* As a optional final module - [KServe][8] was introduced to enhance our potential toolbelt when it came to deploying ML models.

## Final Impressions

At the end of the day, I cannot recommend this class enough. I came into this class with:
* Reasonable exposure to statistics and statistical programming frameworks
* Very little deep learning experience
* Very little experience when it came to 'deployment' or 'productionizing' anything
* A 3 month old baby
* A full-time job

Alexey and his team took efforts to ensure the students were exposed to the 'full stack' of what it meant to develop machine learning models. He took care to ensure additional resources were made available and emphasized additional learning was needed where appropriate. While I don't feel this class made me an expert in machine learning by any means, I do feel like it equipped me with:
* Confidence to comfortably explore additional resources as I see fit
* A solid understanding of the distinction and importance and the many roles contributing to production-ready machine learning, and how they interact with each other.

In addition - I was able to remain gainfully employed and my little guy is now 6+ months old and healthy!

To conclude the post - I'd like to sincerely thank Alexey and [DataTalks.Club][9] for composing the course and making it freely available. I'd also like to thank all of the students who took an active role in improving each other's learning experience! <3

[1]: https://github.com/DataTalksClub/mlops-zoomcamp
[2]: https://cs231n.github.io/
[3]: https://www.kaggle.com/competitions/kitchenware-classification
[4]: https://saturncloud.io/
[5]: https://www.bentoml.com/
[6]: https://www.tensorflow.org/lite
[7]: https://www.tensorflow.org/tfx/guide/serving
[8]: https://kserve.github.io/website/master/
[9]: https://datatalks.club/