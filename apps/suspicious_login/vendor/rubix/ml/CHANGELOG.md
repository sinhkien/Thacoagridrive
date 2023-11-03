- 0.4.2
    - Fix Missing Extension exception class filename

- 0.4.1
    - Optimized CART node splitting for low variance continuous features
    - Fixed RBX serializer string representation
    - Prevent overwrites when instantiating Unlabeled from iterator

- 0.4.0
    - Added Truncated SVD transformer
    - Added Rubix Object File (RBX) format serializer
    - Added class revision() method to the Persistable interface
    - Added custom class revision mismatch exception
    - Add Boolean Converter transformer
    - Deprecated Igbinary serializer and move to Extras package
    - Deprecate explainedVar() and noiseVar() methods on PCA and LDA
    - Added missing extension specification and exception
    
- 0.3.2
    - Fix t-SNE momentum gain bus error when using Tensor extension
    - Optimize t-SNE matrix instantiation
    - Refactor single sample inference methods
    - Update the docs site

- 0.3.1
    - Fix CART feature importances purity increase overflow

- 0.3.0
    - Added K Best feature selector
    - Added Flysystem 2.0 Persister
    - Stateful and Elastic Transformers are now Persistable
    - Added Gzip serializer for Persistable objects
    - Added Sentence tokenizer
    - Library now throws Rubix\ML namespaced exceptions
    - Added Scoring interface for estimators that score samples
    - Deprecated the Ranking interface
    - Add generic Trainable interface
    - Decision Trees are now iterable
    - Added K-Skip-N-Gram tokenizer and deprecated Skip Gram
    - Single sample inference methods are now marked internal
    - Deprecated Variance Threshold Filter
    
- 0.2.4
    - Categorized and annotated internal API
    - Fix context of preprocess() and combinations() methods
    - Added version constants

- 0.2.3
    - Now compatible with PHP 8 GD Image types
    - Dataset cast sample to array upon validation

- 0.2.2
    - Optimized CART quantile-based node splitting
    - Fixed CART and Extra Tree min purity increase post pruning
    - Fix ITree infinite loop splitting same samples

- 0.2.1
    - Optimized Stop Word Filter
    - Allow list of empty regex patterns in Regex Filter
    - Handle missing class definitions in Native and Igbinary
    - Fixed infinite loop in Ball Tree & KD Tree grow method

- 0.2.0
    - Add Recursive Feature Eliminator feature selector
    - Can now disable holdout validation in MLP learners
    - TF-IDF Transformer additive (Laplace) smoothing now variable
    - Added instability detection to gradient-based learners
    - Gradient Boost validation set holdout can now be 0
    - Specifications now extend base class
    - Rename Dataset validate argument to verify
    - Ball Tree Cluster nodes are now called Cliques
    - ITree cells are now called Depth nodes
    - Added Dataset join() method and deprecated augment()
    - Added score() method to Ranking API and deprecated rank()
    - Renamed Radius Neighbors anomalyClass to outlierClass
    - HTML Stripper can now allow user-specified tags
    - Sparse Random Projector now has variable sparsity
    - Deprecated Dense Random Projector transformer
    
- 0.1.6
    - Fix KNN Imputer spatial tree dependency injection

- 0.1.5
    - Compensate for zero vectors in Cosine kernel
    - Fixed KMC2 random threshold calculation
    - Fix Naive Bayes divide by zero when smoothing is 0

- 0.1.4
    - Optimized Cosine distance for sparse vectors

- 0.1.3
    - Optimized Cosine distance kernel
    - Optimized (NaN) Safe Euclidean distance kernel
    - Fixed markedness calculation in Multiclass Breakdown
    - Prevent infinite loop during spatial tree path finding

- 0.1.2
    - Fixed Grid Search best hyper-parameters method
    - Fixed K Means average loss calculation
    - Fixed bootstrap estimators tiny bootstrap sets

- 0.1.1
    - Fixed Image Resizer placeholder image
    - Fixed Filesystem no write permissions on instantiation
    - Nicer Stringable object string representations
    - Do not terminate empty Spatial tree leaf nodes
    - Additional Filesystem persister checks
    - Nicer Dataset object validation error messages

- 0.1.0
    - CV Report Generators now return Report objects
    - Dataset describe methods now return Report objects
    - Allow hyphens and apostrophes in Word Tokenizer
    - Dataset conversion methods now return an Encoding object
    - Encodings are now writeable to disk
    - Allow classes to be selected for Confusion Matrix
    - Fixed divide by zero in Multiclass Breakdown report
    - Changed Random Projector minDimensions default max distortion
    - Fixed Naive Bayes user-defined class prior probabilities
    - Internal CV Learners now check for sufficient hold out data
    - Fixed randomize empty dataset object
    - Removed setPersister method from Persistent Model
    - Added Dataset Has Dimensionality Specification
    - Changed name of Tree max depth parameter to max height
    - Fixed F Beta division by zero
    - Dataset toCSV and toNDJSON accept optional header
    - Nicer Verbose Learner logger output
    - Screen Logger uses empty channel name by default

- 0.1.0-rc5
    - Improved logging for Verbose Learners
    - Added max document frequency to Word Count Vectorizer
    - Whitespace Trimmer is now a separate Transformer
    - Text Normalizers no longer remove extra whitespace
    - Added extra characters pattern to Regex Filter class constants
    - Moved Lambda Function transformer to Extras package
    - GaussianNB new class labels during partial train
    - Decision Tree print ruleset now accepts a header
    - Fixed Variance Threshold Filter drop categorical by default
    - Removed AdaBoost return learned sample weights

- 0.1.0-rc4
    - Added Multibyte Text Normalizer transformer
    - V Measure now has adjustable beta parameter
    - Persistent Model is no longer Verbose
    - Stop Word Filter now handles unicode characters

- 0.1.0-rc3
    - Embedders now adopt the Transformer API
    - Added RanksFeatures interface
    - Logistic Regression and Adaline now implement RanksFeatures
    - Ridge now implements the RanksFeatures interface
    - Added L2 regularization to Dense hidden layers
    - Neural Network L2 regularization now optional
    - Added MLP numerical instability checks
    - Optimized Ball Tree nearest neighbors search
    - Pipeline is now more verbose
    - Renamed Dataset partition method to partitionByColumn
    - Decreased default neural net learner batch size to 128
    - Increased default K Means batch size to 128
    - Renamed Dataset types method to columnTypes
    - Efficient serialization of Word Count Vectorizer
    - Decoupled Persistable interface from Learner
    - Moved Gower Distance kernel to Extras package
    - Moved SiLU activation function to Extras package
    - Removed array_first and array_last from global functions
    - Abstracted deferred Backend computations into Tasks
    - Removed unused BST interface

- 0.1.0-rc2
    - Persistent Model now implements Verbose interface
    - Tuned CART continuous feature quantile-based split finding
    - N-gram and SkipGram use configurable base word tokenizer
    - Moved Alpha Dropout hidden layer to Extras package
    - Added Dataset merge and augment methods
    - Removed Dataset prepend and append methods
    - Lambda Function transformer now takes any callable
    - Text Normalizer trim extra whitespace not optional
    - Mean Shift minimum seeds now set at 20
    - Standardized K Means inertial loss over batch count
    - Added set persister method to Persistent Model
    - Removed range() from neural network Cost Function interface
    - Increased default neural net learner batch size to 200

- 0.1.0-rc1
    - Random Forest now handles imbalanced datasets
    - Added early stopping window to AdaBoost
    - Gaussian MLE now has automatic and adaptive threshold
    - Loda now has automatic and adaptive threshold
    - Variance Threshold Filter now selects top k features
    - Added params method to Estimator and Embedder interface
    - t-SNE now compatible with categorical distance kernels
    - Grid Search implements the Wrapper interface
    - Grid Search memorizes all results from last search
    - Dataset fromIterator method accepts any iterable
    - Column Picker throws exception if column not found
    - Better hyper-parameter stringification
    - Improved Dataset exception messages
    - RMSE now default validation Metric for Regressors
    - Added balanced accuracy and threat score to Multi-class report
    - Pipeline and Persistent Model now implement Ranking
    - Changed percentile to quantile in Stats helper
    - Renamed Residual Analysis report to Error Analysis
    - Changed namespace of specification objects

- 0.0.19-beta
    - Added SiLU self-stabilizing neural network activation function
    - Dense hidden layers now have optional bias parameter
    - KNN-based imputers accelerated by spatial tree
    - Changed the default anomaly class for Radius Neighbors
    - Removed additional methods from guessing Strategies
    - Numeric String Converter now uses fixed NaN placeholder
    - Missing Data Imputer now passes through other data types
    - Changed order of Missing Data Imputer params
    - Renamed high-level resource type to image type
    - Added comb (n choose k) to global functions
    - Image Vectorizer now has grayscale option
    - Clusterers and Anomaly Detectors return integer predictions
    - Ball Tree now compatible with categorical distance kernels
    - Parallel Learners using Amp Backend are now persistable
    - Changed order of Radius Neighbors hyper-parameters

- 0.0.18-beta
    - Now requires PHP 7.2 and above
    - Added phpbench performance benchmarks
    - Added JSON, NDJSON, CSV, and Column Picker Extractors
    - Changed the way fromIterator method works on Dataset object
    - Added Hyperplane dataset generator
    - Changed the way noise is applied to Circle, Half Moon, etc.
    - Changed name of Multilayer Perceptron classifier
    - Deferred computations are now callable
    - Removed range() from the activation function interface
    - Added label type validation for supervised learners
    - Added toArray, toJson, toCsv, toNdjson methods to Dataset API
    - Can now preview a Dataset object in console by echoing it
    - Changed Labeled dataset objects iteration and array access
    - Removed zip and unzip methods on Labeled dataset
    - Added describe by label method to Labeled dataset
    - Changed the way fromIterator works on Dataset
    - Added Regex Filter transformer
    - Changed name of Igbinary serializer
    - Changed dataset and label description

- 0.0.17-beta
    - Added Tensor extension compatibility
    - Migrated to new Tensor library namespace
    - Anomaly detector predictions now categorical
    - Clusterers now predict categorical cluster labels
    - Added extracting data section to docs
    - Added code metrics
    - Added training and inference sections to the docs
    - Decision tree rules method now outputs a string
    - Added drop row and column methods to dataset interface
    - Dataset row() method is now sample()

- 0.0.16-beta
    - Radius Neighbors allows user-definable anomaly class
    - Added KNN Imputer
    - Added Random Hot Deck Imputer
    - Missing Data Imputer now handles NaNs by default
    - Added NaN safe Euclidean distance kernel
    - Added Gower distance kernel
    - Added Hamming distance kernel
    - Dataset now requires homogeneous feature columns
    - KNN now compatible with categorical features
    - Added transform column method to dataset object
    - Added describe method to dataset object
    - Added describe labels method to Labeled dataset
    - Added deduplicate method to dataset object
    - Added unzip static factory for Labeled datasets from data table
    - Changed the order of t-SNE hyper-parameters
    - Added global transpose array helper function
    - Renamed label key to classes in Multiclass Breakdown report
    - Changed order of Gradient Boost and AdaBoost hyper-parameters
    - Changed order of Loda hyper-parameters
    - Added asString method to the Data Type helper class
    - Added check for NaN labels in Labeled dataset
    - Changed namespace of Data Type helper
    - Numeric String Converter now handles NaN strings
    - Added predict probabilities of a single sample method
    - Added rank single sample trait

- 0.0.15-beta
    - Added Gaussian MLE anomaly detector
    - Added early stopping window to Gradient Descent-based Learners
    - Changed early stopping behavior of MLP-based estimators
    - Added predict single sample method to Learner interface
    - Changed method signature of random subset without replacement
    - Changed K Means default max iterations
    - Robust Z-Score now uses weighted combination of scores
    - Cross validators now stratify dataset automatically
    - Changed default k in K Fold validator
    - Changed order of Loda hyperparameters
    - Changed hyperparameter order of KNN-based learners
    - Added method to return categories from One Hot Encoder
    - Removed Lottery and Blurry Percentile guessing strategy
    - Added Percentile guessing strategy
    - Added shrinkage parameter to Wild Guess strategy
    - Added additional methods to random Strategies
    - Renamed Popularity Contest strategy to Prior
    - Datasets now inherit from abstract parent Dataset class
    - Removed Dataset interface
    - Neural net parameter update in Layer instead of Optimizer
    - Changed order of distance-based clusterer hyperparameters
    - Improved cluster radius estimation in Mean Shift
    - Naive Bayes now adaptive to new class labels
    - Changed order of neural network learner hyperparameters
    - Added safety switch to AdaBoost if weak learner worse than random
    - Added min change early stopping to AdaBoost
    - Added Patreon funding support

- 0.0.14-beta
    - Added feature importances to Gradient Boost
    - Added progress monitoring to Gradient Boost w/ early stop
    - Added Spatial and Decision tree interface
    - Mean Shift compatible with Spatial trees
    - K-d Neighbors base spatial tree configurable
    - Radius Neighbors now uses base spatial tree
    - Local Outlier Factor interchangeable base search tree
    - DBSCAN now uses any Spatial tree for range searches
    - CART uses downsampling on continuous features
    - LOF and Isolation Forest contamination off by default
    - Embed method now returns an array instead of dataset
    - Fixed issue with Dataset partitioning
    - Renamed Coordinate node to Hypercube
    - KNN default k is now 5 instead of 3
    - CART can now print a text representation of the decision rules
    - Removed Local Outlier Factor brute force version
    - Changed namespace of trees to Graph/Trees
    - CART impurity tolerances are now hardcoded
    - Changed order of CART hyperparameters
    - Added Extra Tree base implementation
    - Extra Tree splits are now unbiased
    - Extra Tree Classifier now minimizes entropy
    - Reduced the memory footprint of Binary Nodes
    - Gradient Boost shrinkage bounded between 0 and 1
    - Added random subset without replacement to dataset API
    - Changed order of Gradient Boost hyperparameters
    - Changed order of MLP hyperparameters
    - Ranking interface is now a general interface
    - Changed default t-SNE minimum gradient

- 0.0.13-beta
    - Added documentation site
    - Added Regression and Classification Loss interfaces
    - Robust Z-Score is now a Ranking anomaly detector
    - Loda now defaults to auto detect bin count
    - Removed tolerance param from Gradient Boost and AdaBoost
    - Screen logger timestamp format now configurable
    - Dropped Persistable contract between SVM-based learners
    - Random Forest feature importances now serial
    - Removed Robust Z-Score tolerance parameter
    - Added slice method to Dataset API
    - Loda now performs density estimation on the fly
    - Transform labels now returns self for method chaining

- 0.0.12-beta
    - Added AdaMax neural network Optimizer
    - Added Parallel interface for multiprocessing
    - Added Backend processing interface
    - Added Amp parallel and Serial processing Backends
    - Random Forest uses parallel processing
    - Added CPU helper and core auto detection
    - Committee Machine is now a meta estimator
    - Committee Machine now Parallel and Verbose
    - Bootstrap Aggregator uses multiple processes
    - Grid Search now trains in parallel
    - K Fold, Leave P Out, and Monte Carlo validators now Parallel
    - Added momentum to Batch Norm moving averages
    - Custom Batch Norm and PReLU parameter initialization
    - Added custom bias initialization to Dense layer
    - Output layers now accept custom initializers
    - Added Constant neural network parameter initializer
    - Removed Exponential neural network Cost Function
    - Filesystem save history is now either on or off
    - Removed save history from Redis DB Persister
    - Removed Model Orchestra meta-estimator
    - Grid Search automatically retrains base estimator
    - Added neural net Parameter namespace and interface
    - Changed order of Loda hyperparameters
    - Replaced F1 Score with F Beta metric
    - Removed ISRU and Gaussian activation functions
    - Fixed SELU derivative computation
    - Changed adaptive optimizer default decay parameters
    - Changed default learning rate of Stochastic Optimizer
    - Added SMAPE (Symmetric MAPE) regression metric
    - Added MAPE to Residual Analysis report
    - Fixed MSLE computation in Residual Analysis report
    - Renamed RMSError Metric to RMSE
    - Embedders no longer implement Estimator interface
    - Added error statistics to Residual Analysis report

- 0.0.11-beta
    - K Means now uses mini batch GD instead of SGD
    - K Means in now an Online learner
    - Added Adjusted Rand Index clustering metric
    - Added Seeder Interface
    - Added Random, K-MC2, and Plus Plus seeders
    - Accelerated Mean Shift with Ball Tree
    - Added radius estimation to Mean Shift
    - K Means and Mean Shift now implement Probabilistic
    - Gaussian Mixture now supports seeders
    - Changed order of K Means hyperparameters
    - Moved Ranking interface to anomaly detector namespace
    - N-gram Tokenizer now outputs ranges of word tokens
    - Changed default Fuzzy C Means hyper-parameters
    - Added spatial partitioning to Dataset API
    - Added Image Resizer transformer
    - Image Vectorizer no longer resizes images
    - Fixed adaptive optimizer bug upon binary unserialization
    - Removed Quartile Standardizer
    - Optimized Image Vectorizer using bitwise operations
    - Pipeline is now more verbose

- 0.0.10-beta
    - Added Loda online anomaly detector
    - Added Radius Neighbors classifier and regressor
    - Added fast k-d LOF anomaly detector
    - Added base Ball Tree implementation
    - Added Ranking interface
    - Changed Manifold namespace to Embedders
    - Isolation Forest and LOF are now Ranking
    - K Means is now Verbose
    - Accelerated DBSCAN with Ball Tree
    - Added upper bound to contamination hyperparameter
    - Changed hyper-parameter order of Isolation Forest
    - Optimized Interval Discretizer transformer
    - K Means is no longer Online
    - Removed Sign function
    - Added Binary Tree interface
    - Added bin count heuristic to Loda
    - Changed order of k-d neighbors hyperparameters
    - Removed Hamming distance kernel

- 0.0.9-beta
    - Added transform labels method to Labeled Dataset
    - Added Data Type helper
    - Pipeline and Persistent Model are now Probabilistic
    - Added stack method to dataset API
    - Changed merge method on dataset to append and prepend
    - Implemented specifications
    - Added data type compatibility for estimators
    - Added compatibility method to validation metrics
    - Added estimator compatibility to reports
    - Added trained method to learner API
    - Added fitted method to Stateful transformer API
    - Changed ordinal of integer encoded data types
    - Added Adaptive optimizer interface
    - Changed Transformer transform API
    - Removed prompt method from Persistent Model
    - Removed JsonSerializable from Dataset Interface

- 0.0.8-alpha
    - Added Model Orchestra meta estimator
    - Added Stop Word Filter transformer
    - Added document frequency smoothing to TF-IDF Transformer
    - Added Uniform neural net weight initializer
    - Improved Gaussian Mixture numerical stability
    - Fixed missing probabilities in Classification Tree
    - Removed MetaEstimator interface
    - Added model Wrapper interface
    - AdaBoost is now probabilistic
    - Added Constant guessing strategy
    - Added N-Gram word tokenizer
    - Added Skip-Gram word tokenizer
    - Changed FCM and K Means default max epochs
    - Added zip method to Labeled dataset
    - Removed stop word filter from Word Count Vectorizer
    - Changed order of t-SNE hyper-parameters
    - Grid search now has automatic default Metric
    - Base k-D Tree now uses highest variance splits
    - Renamed Raw Pixel Encoder to Image Vectorizer

- 0.0.7-alpha
    - Added Support Vector Machine classifier and regressor
    - Added One Class SVM anomaly detector
    - Added Verbose interface for logging
    - Added Linear Discriminant Analysis (LDA) transformer
    - Manifold learners are now considered Estimators
    - Transformers can now transform labels
    - Added Cyclic neural net Optimizer
    - Added k-d neighbors search with pruning
    - Added post pruning to CART estimators
    - Estimators with explicit loss functions are now Verbose
    - Grid Search: Added option to retrain best model on full dataset
    - Filesystem Persister now keeps backups of latest models
    - Added loading backup models to Persister API
    - Added PSR-3 compatible screen logger
    - Grid Search is now Verbose
    - t-SNE embedder is now Verbose
    - Added Serializer interface
    - Added Native and Binary serializers
    - Fixed Naive Bayes reset category counts during partial train
    - Pipeline and Persistent Model are now Verbose
    - Classification and Regression trees now Verbose
    - Random Forest can now return feature importances
    - Gradient Boost now accepts base and booster estimators
    - Blurry Median strategy is now Blurry Percentile
    - Added Mean strategy
    - Removed dataset save and load methods
    - Subsumed Extractor api into Transformer
    - Removed Concentration metric
    - Changed Metric and Report API
    - Added Text Normalizer transformer
    - Added weighted predictions to KNN estimators
    - Added HTML Stripper transformer

- 0.0.6-alpha
    - Added Gradient Boost regressor
    - Added t-SNE embedder
    - AdaBoost now uses SAMME multiclass algorithm
    - Added Redis persister
    - Added Max Absolute Scaler
    - Added Principal Component Analysis transformer
    - Pipeline is now Online and has elastic option
    - Added Elastic interface for transformers
    - Z Scale Standardizer is now Elastic
    - Min Max Normalizer is now Elastic
    - TF-IDF Transformer is now Elastic
    - Added Huber Loss cost function
    - Added Swiss Roll generator
    - Moved Generators to the Datasets directory
    - Added Persister interface for Persistable objects
    - Added overwrite protection to Persistent Model meta estimator
    - Multiclass Breakdown report now breaks down user-defined classes
    - Renamed restore method to load on Datasets and Persisters
    - Random Forest now accepts a base estimator instance
    - CARTs now use max features heuristic by default
    - Added build/quick factory methods to Datasets
    - Added Interval Discretizer transformer
    - GaussianNB and Naive Bayes now accept class prior probabilities
    - Removed Image Patch Descriptor
    - Added Learner interface for trainable estimators
    - Added smart cluster initialization to K Means and Fuzzy C Means
    - Circle and Half Moon generators now generate Labeled datasets
    - Gaussian Mixture now uses K Means initialization
    - Removed Isolation Tree anomaly detector

- 0.0.5-alpha
    - Added Gaussian Mixture clusterer
    - Added Batch Norm hidden layer
    - Added PReLU hidden layer
    - Added Relative Entropy cost function to nn
    - Added random weighted subset to datasets
    - Committee Machine classifier only and added expert influence
    - Added type method to Estimator API
    - Removed classifier, detector, clusterer, regressor interfaces
    - Added epsilon smoothing to Gaussian Naive Bayes
    - Added option to fit priors in Naive Bayes classifiers
    - Added Jaccard distance kernel
    - Fixed Hamming distance calculation
    - Added Alpha Dropout layer
    - Fixed divide by 0 in Cross Entropy cost function
    - Added scaling parameter to Exponential cost function
    - Added Image Patch Descriptor extractor
    - Added Texture Histogram descriptor
    - Added Average Color descriptor
    - Removed parameters from Dropout and Alpha Dropout layers
    - Added option to remove biases in Dense and Placeholder1D layers
    - Optimized Dataset objects
    - Optimized matrix and vector operations
    - Added grid params to Param helper
    - Added Gaussian RBF activation function
    - Renamed Quadratic cost function to Least Squares
    - Added option to stratify dataset in Hold Out and K Fold
    - Added Monte Carlo cross validator
    - Implemented noise as layer instead of activation function
    - Removed Identity activation function
    - Added Xavier 1 and 2 initializers
    - Added He initializer
    - Added Le Cun initializer
    - Added Normal (Gaussian) initializer

- 0.0.4-alpha
    - Added Dropout hidden layer
    - Added K-d Neighbors classifier and regressor
    - Added Extra Tree Regressor
    - Added Adaline regressor
    - Added sorting by column to Dataset
    - Added sort by label to Labeled Dataset
    - Added appending and prepending to Dataset
    - Added Dataset Generators
    - Added Noisy ReLU activation function
    - Fixed bug in dataset stratified fold
    - Added stop word filter to Word Count Vectorizer
    - Added centering and scaling options for standardizers
    - Added min dimensionality estimation on random projectors
    - Added Gaussian Random Projector
    - Removed Ellipsoidal distance kernel
    - Added Thresholded ReLU activation function
    - Changed API of Raw Pixel Encoder

- 0.0.3-alpha
    - Added Extra Tree classifier
    - Random Forest now supports Extra Trees
    - New Decision Tree implementation
    - Added Canberra distance kernel
    - Committee Machine is now a Meta Estimator Ensemble
    - Added Bootstrap Aggregator Meta Estimator Ensemble
    - Added Gaussian Naive Bayes
    - Naive Bayes classifiers are now Online learners
    - Added tolerance to Robust Z-Score detector
    - Added Concentration clustering metric (Calinski Harabasz)

- 0.0.2-alpha
    - Added Anomaly Detection
    - New Neural Net implementation
    - Added static analysis
    - Added Travis CI configuration

- 0.0.1-alpha